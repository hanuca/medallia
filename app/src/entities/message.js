class Message {

    constructor(subject, content) {
        this.subject = subject;
        this.content = content;
        this.isRead = false;
    }

    read() {
        this.isRead = true;
    }
}

