
document.getElementById('connectBtn').addEventListener('click', function() {
    alert('Wallet connected successfully!');
    document.getElementById('walletSection').style.display = 'block';
});

document.getElementById('depositBtn').addEventListener('click', function() {
    alert('Deposit detected successfully!');
    document.getElementById('walletSection').style.display = 'none';
    document.getElementById('successSection').style.display = 'block';
    
    // Generate fake transaction hash
    let txHash = "0x" + Math.random().toString(16).substr(2, 64);
    document.getElementById('txHash').innerText = txHash;
});
