let imgBox = document.getElementById('imgBox');
let qrImg = document.getElementById('qrImg');
let text = document.getElementById('qrtext');

async function getQR()
{
    if(text.value.length > 0)
    {
        let qrtext = text.value
        let apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";
        qrImg.src = apiUrl + qrtext;
        imgBox.classList.add("showImg")
    }
    else{
       qrtext.classList.add('error');
       setTimeout(() => {
          qrtext.classList.remove('error');
       }, 1000);
    }
}

const btn = document.getElementById('generate');
btn.onclick = () => {
    getQR();
};