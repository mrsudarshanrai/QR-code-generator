/*

    [[[[[[[[[[[[[[[      ]]]]]]]]]]]]]]]
    [::::::::::::::      ::::::::::::::]
    [::::::::::::::      ::::::::::::::]
    [::::::[[[[[[[:      :]]]]]]]::::::]
    [:::::[                      ]:::::]
    [:::::[                      ]:::::]
    [:::::[                      ]:::::]
    [:::::[                      ]:::::]
    [:::::[   Shudarshan Rai     ]:::::]
    [:::::[   copyright 2019     ]:::::]
    [:::::[                      ]:::::]
    [:::::[                      ]:::::]
    [:::::[                      ]:::::]
    [:::::[                      ]:::::]
    [::::::[[[[[[[:      :]]]]]]]::::::]
    [::::::::::::::      ::::::::::::::]
    [::::::::::::::      ::::::::::::::]
    [[[[[[[[[[[[[[[      ]]]]]]]]]]]]]]]

*/



$("button").click(()=>{
   const qrText =$("#Qrtext").val();
    const dimension =$("#dimension").val();
     const placeQr =$("#qrImg").attr("src","http://chart.apis.google.com/chart?cht=qr&chl="+qrText+"&chs="+dimension+"x"+dimension);
     
       const download =$("#download").attr("href","http://chart.apis.google.com/chart?cht=qr&chl="+qrText+"&chs="+dimension+"x"+dimension);


});