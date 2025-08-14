document.addEventListener('DOMContentLoaded', () => {
    const recipientNameEl = document.getElementById('recipient-name');
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('to') || 'Cintaku💕';

    recipientNameEl.textContent = `Untuk ${name}, Resti Triani Ahmad`;
    document.title = `Selamat Wisuda, ${name}! 🎉`;

    const messageForm = document.getElementById('message-form');
    const messagesContainer = document.getElementById('messages-container');

    // Mengambil pesan dari Local Storage jika ada
    let messages = JSON.parse(localStorage.getItem('wisudaMessages')) || [
        { sender: 'Jaelani', text: 'Happy Graduation sayang😍! Akhirnya perjuangan terbayar sudah, Bangga banget deh sama kamu, Tinggal aku saja nih yang belum🤣, Istiqomah yah tujuan kamu yang sekarang. Doaku selalu menyertaimu💕🥰' }
    ];

    const renderMessages = () => {
        messagesContainer.innerHTML = '';
        messages.forEach(msg => {
            const messageCard = document.createElement('div');
            messageCard.className = 'message-card';
            messageCard.innerHTML = `
                <h4>Dari: ${msg.sender}</h4>
                <p>${msg.text}</p>
            `;
            messagesContainer.appendChild(messageCard);
        });
    };

    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const senderName = document.getElementById('sender-name').value;
        const messageText = document.getElementById('message-text').value;

        if (senderName && messageText) {
            const newMessage = {
                sender: senderName,
                text: messageText
            };
            messages.push(newMessage);
            localStorage.setItem('wisudaMessages', JSON.stringify(messages));
            renderMessages();

            // Reset form
            messageForm.reset();
        }
    });

    renderMessages();
});