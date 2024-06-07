import React from 'react';

function FacebookEmbed() {
  return (
    <div className='facebook h_socal'>
      {/* <iframe 
        title="Facebook Profile"
        src="https://in.linkedin.com/in/ripukesh-kumar-10802b1a5" 
        width="340" 
        height="500" 
        style={{ border: 'none', overflow: 'hidden' }} 
        scrolling="no" 
        frameborder="0" 
        allowfullscreen="true" 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
      </iframe> */}
      <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D644126457279166%26id%3D1250431681729154%26substory_index%3D644126457279166&show_text=true&width=500" width="500" height="769" style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      {/* <iframe src="https://www.linkedin.com/in/ripukesh-kumar-376207281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" width="500" height="769" style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
      

    </div>
  );
}

export default FacebookEmbed;
