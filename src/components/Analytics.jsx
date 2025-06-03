import React, { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-7GJKZSDP90';
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7GJKZSDP90');
    `;
    document.head.appendChild(script2);
  }, []);

  return null;
};

export default Analytics;