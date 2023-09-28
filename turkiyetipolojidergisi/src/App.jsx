import React, { useState, useEffect } from 'react';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const track = document.getElementById('image-track');

    const handleOnDown = (e) => setMouseDownAt(e.clientX);

    const handleOnUp = () => {
      setMouseDownAt(0);
      setPrevPercentage(percentage);
    };

    const handleOnMove = (e) => {
      if (mouseDownAt === 0) return;

      const mouseDelta = parseFloat(mouseDownAt) - e.clientX;
      const maxDelta = window.innerWidth / 1;

      const newPercentage =
        ((mouseDelta / maxDelta) * -100) + parseFloat(prevPercentage);
      const nextPercentage = Math.max(Math.min(newPercentage, 0), -100);

      setPercentage(nextPercentage);

      track.style.transform = `translate(${nextPercentage}%, -50%)`;

      const images = document.getElementsByClassName('image');
      for (const image of images) {
        image.style.objectPosition = `${100 + nextPercentage}% center`;
      }
    };

    window.addEventListener('mousedown', handleOnDown);
    window.addEventListener('mouseup', handleOnUp);
    window.addEventListener('mousemove', handleOnMove);

    return () => {
      window.removeEventListener('mousedown', handleOnDown);
      window.removeEventListener('mouseup', handleOnUp);
      window.removeEventListener('mousemove', handleOnMove);
    };
  }, [mouseDownAt, percentage, prevPercentage]);

  return (
    <>
    <div className="social-icons">
        <a target="_blank" href="https://www.instagram.com/turkiyetipolojidergisi/">
          <i className="fab fa-instagram sosyalikon"></i>
        </a>
        <a target="_blank" href="https://www.twitter.com/turkiyetipoloji">
          <i className="fab fa-twitter sosyalikon"></i>
        </a>
        <a target="_blank" href="mailto:turkiyetipolojidergisi@gmail.com">
          <i className="far fa-envelope"></i>
        </a>
      </div>
      <div id="image-track" data-mouse-down-at={mouseDownAt} data-prev-percentage={prevPercentage}>
            <a href="https://www.google.com/search?q=t%C4%B1klay%C4%B1nca+ne+olaca%C4%9F%C4%B1n%C4%B1+d%C3%BC%C5%9F%C3%BCn%C3%BCyordun+ki&sca_esv=569153003&rlz=1C5CHFA_enTR1055TR1055&ei=G48VZYPPNYHXxc8PyMKT4A8&ved=0ahUKEwjDyKy3w82BAxWBa_EDHUjhBPwQ4dUDCBA&uact=5&oq=t%C4%B1klay%C4%B1nca+ne+olaca%C4%9F%C4%B1n%C4%B1+d%C3%BC%C5%9F%C3%BCn%C3%BCyordun+ki&gs_lp=Egxnd3Mtd2l6LXNlcnAiMHTEsWtsYXnEsW5jYSBuZSBvbGFjYcSfxLFuxLEgZMO8xZ_DvG7DvHlvcmR1biBraTIHECEYoAEYCjIHECEYoAEYCkj1MVCkBVigMXAFeAGQAQOYAb4CoAHnO6oBCTAuMjcuMTIuMbgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgsQABiABBixAxiDAcICERAuGIAEGLEDGIMBGMcBGNEDwgIFEAAYgATCAgsQABiKBRixAxiDAcICCxAuGIAEGMcBGNEDwgIIEAAYgAQYsQPCAgcQABiKBRhDwgILEC4YgAQYxwEYrwHCAgUQLhiABMICBBAAGB7CAgYQABgWGB7CAgUQIRigAeIDBBgAIEGIBgGQBgg&sclient=gws-wiz-serp" target="_blank" rel="noopener noreferrer">
                <img className="image" src="https://cdn.discordapp.com/attachments/898984480772067398/1156959349390983290/premium_photo-1678216285961-d4271edbde42.png?ex=6516dddc&is=65158c5c&hm=95b293d6d086cf312b22a35ced983fdc60a4f8154f0b3188836dfc2b2447199e&" draggable="false" />
            </a>
            <a href="https://www.docdroid.net/HkRZCT8/sayi-2-fonksiyonlar-ve-ejderhalar-pdf" target="_blank" rel="noopener noreferrer">
                <img className="image" src="https://cdn.discordapp.com/attachments/898984480772067398/1156958158661623879/sayi2.png?ex=6516dcc0&is=65158b40&hm=51add0d3b9771e76766094006006e28d75e10e95e3492681ab7dd3a8258b4192&" draggable="false" />
            </a>
            <a href="https://www.docdroid.net/VLNjBLH/turkiye-tipoloji-dergisi-pdf" target="_blank" rel="noopener noreferrer">
                <img className="image" src="https://cdn.discordapp.com/attachments/898984480772067398/1156958181126311986/sayi1.png?ex=6516dcc5&is=65158b45&hm=7188638d1364f8e3a63334642456037204b74b06a114a3805181feb6d28cf89f&" draggable="false" />
            </a>
</div>

    </>
  );
};

export default App;
