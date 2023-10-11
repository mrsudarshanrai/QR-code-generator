$("button").click(() => {
  const qrText = $("#Qrtext").val();
  const dimension = $("#dimension").val();
  const qrImg = $("#qrImg");
  const download = $("#download");
  const errorContainer = $("#errorContainer");

  // Reset error messages
  errorContainer.text("");
  errorContainer.hide();

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
  } else if (dimension.trim() && dimension > 547) {
    // Display error for invalid dimension
    errorContainer.text("Invalid dimension. Max dimension is 547px.");
    errorContainer.show();
  } else {
    // Generate the QR code and download link
    qrImg.attr(
      "src",
      "http://chart.apis.google.com/chart?cht=qr&chl=" +
      qrText +
      "&chs=" +
      dimension +
      "x" +
      dimension
    );
    download.attr(
      "href",
      "http://chart.apis.google.com/chart?cht=qr&chl=" +
      qrText +
      "&chs=" +
      dimension +
      "x" +
      dimension
    );

    // Show the QR code and download link
    qrImg.show();
    download.show();
  }
});


const qrText = $("#Qrtext").val();