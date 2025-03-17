document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-500', 'bg-purple-500'];
    const currentColor = this.classList[2];
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    this.classList.remove(currentColor);
    this.classList.add(newColor);
    console.log("colorButton & force_Refresh button clicked");
});

document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('theme-dark');
    document.body.classList.toggle('theme-light');
    console.log("themeToggle clicked");
});
