class Message {

    constructor(id, subject, content, isRead) {
        this.id = id;
        this.subject = subject;
        this.content = content;
        this.isRead = isRead ? isRead : false;
    }

    read() {
        this.isRead = true;
    }
}

