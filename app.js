$("button").click(() => {
  const qrText = $("#Qrtext").val();
  const dimension = $("#dimension").val();
  const qrImg = $("#qrImg");
  const download = $("#download");
  const errorContainer = $("#errorContainer");
  const loadingIndicator = $(".loading");

  // Reset error messages
  errorContainer.text("");
  errorContainer.hide();

  // Show loading indicator
  loadingIndicator.show();

  if (!qrText.trim() && !dimension.trim()) {
    // Display error for both QR text and dimension missing
    errorContainer.text("Both QR text and dimension are required fields.");
    errorContainer.show();
  } else if (!qrText.trim()) {
    // Display error for missing QR text
    errorContainer.text("QR text is required.");
    errorContainer.show();
  } else if (!dimension.trim()) {
    // Display error for missing dimensions
    errorContainer.text("Dimension is required.");
    errorContainer.show();
  } else {
    // Generate the QR code and download link
    const qr = new QRCode(qrImg[0], {
      text: qrText,
      width: parseInt(dimension),
      height: parseInt(dimension),
    });

    // Hide loading indicator
    loadingIndicator.hide();

    // Show the QR code and download link
    qrImg.show();
    download.attr(
      "href",
      qrImg[0].childNodes[0].toDataURL("image/png")
    );
    download.attr("download", "qrcode.png");
    download.show();
  }
});
