import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface ChatMessage {
    name: string;
    content: string;
}

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ReactiveFormsModule, JsonPipe],
    styleUrl: './app.component.css',
    templateUrl: './app.component.html',
})
export class AppComponent {
    messages: ChatMessage[] = [];

    socket!: WebSocket;

    addMessageForm = new FormGroup({
        name: new FormControl<string>(''),
        content: new FormControl<string>(''),
    });

    ngOnInit() {
        this.socket = new WebSocket('ws://localhost:3000');
        this.socket.addEventListener('open', () => console.log('Socket open!'));
        this.socket.addEventListener('close', () => console.log('Socket dicht!'));
        this.socket.addEventListener('message', e => {
            let message = JSON.parse(e.data) as ChatMessage;
            this.messages.push(message);
        });
    }

    say() {
        this.socket.send(JSON.stringify(this.addMessageForm.value));
        this.addMessageForm.controls.content.setValue('');
        // document.querySelector('#input-content').focus();
    }
}
