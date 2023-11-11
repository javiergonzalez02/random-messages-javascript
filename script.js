messages = ["Hello", "Good morning", "Good afternoon"]

const randomMessage = arr => {
    console.log(arr[Math.floor(Math.random() * arr.length)])
}

randomMessage(messages)