function dynamicdropdown1(listindex1) {
  document.getElementById("subcategory1").length = 0;
  switch (listindex1) {
    case "All_Formats":
      document.getElementById("subcategory1").options[0] = new Option(
        "Please select framework"
      );
      document.getElementById("subcategory1").options[1] = new Option(
        "E-ink Devices Only"
      );
      document.getElementById("subcategory1").options[2] = new Option(
        "FOS Devices Only"
      );
      break;

    case "KCR_Only":
      document.getElementById("subcategory1").options[0] = new Option(
        "Please select framework"
      );
      document.getElementById("subcategory1").options[1] = new Option("IOS");
      document.getElementById("subcategory1").options[2] = new Option(
        "Kindle Cloud Reader"
      );

      break;
    case "MOBI_only":
      document.getElementById("subcategory1").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory1").options[1] = new Option(
        "All devices"
      );
      document.getElementById("subcategory1").options[2] = new Option(
        "E-ink Devices Only"
      );
      document.getElementById("subcategory1").options[3] = new Option(
        "FOS Devices Only"
      );
      document.getElementById("subcategory1").options[4] = new Option(
        "iOS Only"
      );

      break;
    case "MOP/YJOP":
      document.getElementById("subcategory1").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory1").options[1] = new Option(
        "E-ink Devices Only"
      );
      document.getElementById("subcategory1").options[2] = new Option(
        "FOS Devices Only"
      );
      document.getElementById("subcategory1").options[3] = new Option(
        "iOS Only"
      );

      break;

    case "Non-YJ":
      document.getElementById("subcategory1").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory1").options[1] = new Option(
        "All Devices(non - yj)"
      );
      document.getElementById("subcategory1").options[2] = new Option(
        "Android"
      );
      document.getElementById("subcategory1").options[3] = new Option(
        "both fire and e-ink"
      );
      document.getElementById("subcategory1").options[4] = new Option(
        "ios/kcr"
      );
      document.getElementById("subcategory1").options[5] = new Option(
        "only e-ink"
      );
      document.getElementById("subcategory1").options[6] = new Option(
        "only fire tablet"
      );
      document.getElementById("subcategory1").options[7] = new Option("pc");
      break;

    case "YJ":
      document.getElementById("subcategory1").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory1").options[1] = new Option(
        "All Devices(yj)"
      );
      document.getElementById("subcategory1").options[2] = new Option("e-ink");
      document.getElementById("subcategory1").options[3] = new Option(
        "e-ink/ fire / ios devices (yj only)"
      );
      document.getElementById("subcategory1").options[4] = new Option("fos");
      document.getElementById("subcategory1").options[5] = new Option("ios ");
      document.getElementById("subcategory1").options[6] = new Option(
        "kindle for pc/ mac"
      );
      document.getElementById("subcategory1").options[7] = new Option(
        "only kindle for ios (yj only)"
      );

      break;
  }
  return true;
}

//**********************  Dynamic Select 2  **************************

function dynamicdropdown2(listindex2) {
  document.getElementById("subcategory2").length = 0;
  switch (listindex2) {
    case "E-ink Devices Only":
      document.getElementById("subcategory2").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory2").options[1] = new Option("None");
      document.getElementById("subcategory2").options[2] = new Option("DOC");
      document.getElementById("subcategory2").options[3] = new Option("    ");

      break;

    case "FOS Devices Only":
      document.getElementById("subcategory2").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory2").options[1] = new Option(
        "(Both YJ[bird eye view enabled] and Mobi)"
      );
      document.getElementById("subcategory2").options[2] = new Option("DOC");
      document.getElementById("subcategory2").options[3] = new Option("    ");
      document.getElementById("subcategory2").options[4] = new Option("None");

      break;
    case "IOS":
      document.getElementById("subcategory2").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory2").options[1] = new Option("None");
      break;
    case "Kindle Cloud Reader":
      document.getElementById("subcategory2").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory2").options[1] = new Option("None");
      break;
    case "All devices":
      document.getElementById("subcategory2").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory2").options[1] = new Option(
        "Reflowable content"
      );
      document.getElementById("subcategory2").options[2] = new Option(
        "Fixed content"
      );
      break;
    case "E-ink Devices Only":
      document.getElementById("subcategory2").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory2").options[1] = new Option("    ");
      break;

    case "iOS Only":
      document.getElementById("subcategory2").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory2").options[1] = new Option(
        "Reflowable content"
      );
      document.getElementById("subcategory2").options[2] = new Option(
        "Fixed content"
      );
      document.getElementById("subcategory2").options[3] = new Option("None");
      break;

    case "All Devices(non - yj)":
      document.getElementById("subcategory2").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory2").options[1] = new Option(
        "DOC/DOCX/RTF"
      );
      document.getElementById("subcategory2").options[2] = new Option(
        "EPUB/HTML/Mobi"
      );
      document.getElementById("subcategory2").options[3] = new Option(
        "PDF/KPF inside PDF"
      );
      break;

    case "Android":
      document.getElementById("subcategory2").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory2").options[1] = new Option("None");
      break;

    case "both fire and e-ink":
      document.getElementById("subcategory2").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory2").options[1] = new Option("None");
      break;

    case "ios/kcr":
      document.getElementById("subcategory2").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory2").options[1] = new Option("None");
      break;
    case "ios/kcr":
      document.getElementById("subcategory2").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory2").options[1] = new Option("None");
      break;
    case "only e-ink":
      document.getElementById("subcategory2").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory2").options[1] = new Option("None");
      break;
    case "only fire tablet":
      document.getElementById("subcategory2").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory2").options[1] = new Option("None");
      break;
    case "pc":
      document.getElementById("subcategory2").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory2").options[1] = new Option("None");
      break;

    case "e-ink":
      document.getElementById("subcategory2").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory2").options[1] = new Option("None");
      break;

    case "fos":
      document.getElementById("subcategory2").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory2").options[1] = new Option("None");
      break;

    case "kindle for pc/ mac":
      document.getElementById("subcategory2").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory2").options[1] = new Option("None");
      break;

    case "only kindle for ios (yj only)":
      document.getElementById("subcategory2").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory2").options[1] = new Option("None");
      break;

    case "ios":
      document.getElementById("subcategory2").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory2").options[1] = new Option(
        "Reflowable content"
      );
      document.getElementById("subcategory2").options[2] = new Option(
        "Fixed content"
      );
      break;

    case "e-ink/ fire / ios devices (yj only)":
      document.getElementById("subcategory2").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory2").options[1] = new Option("None");
      break;

    case "All Devices(yj)":
      document.getElementById("subcategory2").options[0] = new Option(
        "Please select framework",
        ""
      );
      document.getElementById("subcategory2").options[1] = new Option(
        "Fixed content"
      );
      document.getElementById("subcategory2").options[2] = new Option(
        "Reflowable content"
      );
      document.getElementById("subcategory2").options[3] = new Option(
        "Fixed Layout/Image Based / non kpf"
      );
      document.getElementById("subcategory2").options[4] = new Option(
        "Fixed Layout/Image Based / kpf"
      );
      break;
  }
  return true;
}
function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

function show() {
  var x1 = document.getElementById("category").value;
  var x2 = document.getElementById("subcategory1").value;
  var x3 = document.getElementById("subcategory2").value;
  // var x4 = document.getElementById("errCategory").value;
  console.log(x1 + "\n" + x2 + "\n" + x3);

  if (x1 === "All_Formats" && x2 === "E-ink Devices Only" && x3 === "None") {
    document.getElementById("demo1").innerHTML = "Mobi Tools";
    document.getElementById("demo2").innerHTML = "Kindle Tool";
    document.getElementById("demo3").innerHTML = "KindleGen SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+-+ISSUE&description=Hi,%0A%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A%0A%0A%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Mobi+Tools&item=KindleTool&group=KindleGen+SE&assignee=yj-se-oncall&tags=ITB_NFCX');
  } else if (
    x1 === "All_Formats" &&
    x2 === "E-ink Devices Only" &&
    x3 === "DOC"
  ) {
    document.getElementById("demo1").innerHTML = "Text Conversion";
    document.getElementById("demo2").innerHTML = "Conversion Quality issue";
    document.getElementById("demo3").innerHTML = "DTC SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Text+Conversion&item=Conversion+Quality+Issue&group=DTC+SE&assignee=Nobody');
  } else if (
    x1 === "All_Formats" &&
    x2 === "FOS Devices Only" &&
    x3 === "(Both YJ[bird eye view enabled] and Mobi)"
  ) {
    document.getElementById("demo1").innerHTML = "Mobi Tools";
    document.getElementById("demo2").innerHTML = "Kindle Tool";
    document.getElementById("demo3").innerHTML = "kindleGen SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Mobi+Tools&item=KindleTool&group=KindleGen+SE&assignee=Nobody');
  } else if (
    x1 === "All_Formats" &&
    x2 === "FOS Devices Only" &&
    x3 === "DOC"
  ) {
    document.getElementById("demo1").innerHTML = "Text Conversion";
    document.getElementById("demo2").innerHTML = "Conversion Quality issue";
    document.getElementById("demo3").innerHTML = "DTC SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Text+Conversion&item=Conversion+Quality+Issue&group=DTC+SE&assignee=Nobody');
  } else if (x1 === "KCR_Only" && x2 === "IOS" && x3 === "None") {
    document.getElementById("demo1").innerHTML = "Text Conversion";
    document.getElementById("demo2").innerHTML = "Content Analysis-Fixups";
    document.getElementById("demo3").innerHTML = "Kindle Cloud Reader SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Text+Conversion&item=Content+Analysis-Fixups&group=Kindle+Cloud+Reader+SE&assignee=Nobody');
  } else if (
    x1 === "KCR_Only" &&
    x2 === "Kindle Cloud Reader" &&
    x3 === "None"
  ) {
    document.getElementById("demo1").innerHTML = "Text Conversion";
    document.getElementById("demo2").innerHTML = "Content Analysis-Fixups";
    document.getElementById("demo3").innerHTML = "Kindle Cloud Reader SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Text+Conversion&item=Content+Analysis-Fixups&group=Kindle+Cloud+Reader+SE&assignee=Nobody');
  } else if (
    x1 === "MOBI_only" &&
    x2 === "All devices" &&
    x3 === "Reflowable content"
  ) {
    document.getElementById("demo1").innerHTML = "YJ";
    document.getElementById("demo2").innerHTML = "YJ Conversion";
    document.getElementById("demo3").innerHTML = "reflow-format-conversion SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=YJ&item=YJ+Conversion&group=reflow-format-conversion+SE&assignee=Nobody');
  } else if (
    x1 === "MOBI_only" &&
    x2 === "All devices" &&
    x3 === "Fixed content"
  ) {
    document.getElementById("demo1").innerHTML = "YJ";
    document.getElementById("demo2").innerHTML = "YJ Conversion";
    document.getElementById("demo3").innerHTML = "fixed-format-conversion SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=YJ&item=YJ+Conversion&group=fix-format-conversion+SE&assignee=Nobody');
  } else if (
    x1 === "MOBI_only" &&
    x2 === "iOS Only" &&
    x3 === "Reflowable content"
  ) {
    document.getElementById("demo1").innerHTML = "YJ";
    document.getElementById("demo2").innerHTML = "YJ Conversion";
    document.getElementById("demo3").innerHTML = "reflow-format-conversion SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=YJ&item=YJ+Conversion&group=reflow-format-conversion+SE&assignee=Nobody');
  } else if (
    x1 === "MOBI_only" &&
    x2 === "iOS Only" &&
    x3 === "Fixed content"
  ) {
    document.getElementById("demo1").innerHTML = "YJ";
    document.getElementById("demo2").innerHTML = "YJ Conversion";
    document.getElementById("demo3").innerHTML = "fixed-format-conversion SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=YJ&item=YJ+Conversion&group=fix-format-conversion+SE&assignee=Nobody');
  } else if (
    x1 === "MOBI_only" &&
    x2 === "E-ink Devices Only" &&
    x3 === "None"
  ) {
    document.getElementById("demo1").innerHTML = "Content Rendering";
    document.getElementById("demo2").innerHTML = "Ereader-YJ";
    document.getElementById("demo3").innerHTML = "rendering SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Content+Rendering&item=Ereader-YJ&group=rendering+SE&assignee=Nobody');
  } else if (x1 === "MOBI_only" && x2 === "FOS Devices Only" && x3 === "None") {
    document.getElementById("demo1").innerHTML = "Content Rendering";
    document.getElementById("demo2").innerHTML = "LCD-YJ";
    document.getElementById("demo3").innerHTML = "KRF ticket resolvers SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Content+Rendering&item=LCD-YJ&group=KRF+ticket+resolvers+SE&assignee=Nobody');
  } else if (
    x1 === "Non-YJ" &&
    x2 === "All Devices(non - yj)" &&
    x3 === "DOC/DOCX/RTF"
  ) {
    document.getElementById("demo1").innerHTML = "Text Conversion";
    document.getElementById("demo2").innerHTML = "Content Analysis-Fixups";
    document.getElementById("demo3").innerHTML = "Kindle Cloud Reader SE ";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Text+Conversion&item=Content+Analysis-Fixups&group=Kindle+Cloud+Reader+SE&assignee=Nobody');
  } else if (
    x1 === "Non-YJ" &&
    x2 === "All Devices(non - yj)" &&
    x3 === "EPUB/HTML/Mobi"
  ) {
    document.getElementById("demo1").innerHTML = "Mobi Tools";
    document.getElementById("demo2").innerHTML = "Mobigen";
    document.getElementById("demo3").innerHTML = "KindleGen SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Mobi+Tools&item=Mobigen&group=KindleGen+SE&assignee=Nobody');
  } else if (
    x1 === "Non-YJ" &&
    x2 === "All Devices(non - yj)" &&
    x3 === "PDF/KPF inside PDF"
  ) {
    document.getElementById("demo1").innerHTML = "Content Conversion";
    document.getElementById("demo2").innerHTML = "Fixed Format";
    document.getElementById("demo3").innerHTML = "MOP Conversion issues";
    
    window.open('https://t.corp.amazon.com');
  } else if (x1 === "Non-YJ" && x2 === "Android" && x3 === "None") {
    document.getElementById("demo1").innerHTML = "Kindle";
    document.getElementById("demo2").innerHTML = "Android";
    document.getElementById("demo3").innerHTML = "Kindle for Android SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Kindle&item=Android&group=Kindle+for+Android+SE&assignee=Nobody');
  } else if (x1 === "Non-YJ" && x2 === "both fire and e-ink" && x3 === "None") {
    document.getElementById("demo1").innerHTML = "Mobi Tools";
    document.getElementById("demo2").innerHTML = "Kindle Tool";
    document.getElementById("demo3").innerHTML = "Kindlegen SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Mobi+Tools&item=KindleTool&group=Kindlegen+SE&assignee=Nobody');
  } else if (x1 === "Non-YJ" && x2 === "ios/kcr" && x3 === "None") {
    document.getElementById("demo1").innerHTML = "Text Conversion";
    document.getElementById("demo2").innerHTML = "Content Analysis-Fixups";
    document.getElementById("demo3").innerHTML = "Kindle Cloud Reader SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Text+Conversion&item=Content+Analysis-Fixups&group=Kindle+Cloud+Reader+SE&assignee=Nobody');
  } else if (x1 === "Non-YJ" && x2 === "only e-ink" && x3 === "None") {
    document.getElementById("demo1").innerHTML = "Content Rendering";
    document.getElementById("demo2").innerHTML = "Ereader-NonYJ";
    document.getElementById("demo3").innerHTML = "rendering SE(E-ink device only)";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Content+Rendering&item=Ereader-NonYJ&group=rendering+SE&assignee=Nobody');
  } else if (x1 === "Non-YJ" && x2 === "only fire tablet" && x3 === "None") {
    document.getElementById("demo1").innerHTML = "Content Rendering";
    document.getElementById("demo2").innerHTML = "Android-NonYJ";
    document.getElementById("demo3").innerHTML = "KRF ticket resolvers SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Content+Rendering&item=Android-NonYJ&group=KRF+ticket+resolvers+SE&assignee=Nobody');
  } else if (x1 === "Non-YJ" && x2 === "pc" && x3 === "None") {
    document.getElementById("demo1").innerHTML = "Kindle";
    document.getElementById("demo2").innerHTML = "Kindle for PC";
    document.getElementById("demo3").innerHTML = "Kindle for desktop SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Kindle&item=Kindle+for+PC&group=Kindle+for+Desktop+SE&assignee=Nobody');
  } else if (
    x1 === "YJ" &&
    x2 === "All Devices(yj)" &&
    x3 === "Fixed content"
  ) {
    document.getElementById("demo1").innerHTML = "YJ";
    document.getElementById("demo2").innerHTML = "YJ Conversion";
    document.getElementById("demo3").innerHTML = "fixed-format-conversion SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=YJ&item=YJ+Conversion&group=fix-format-conversion+SE&assignee=Nobody');
  } else if (
    x1 === "YJ" &&
    x2 === "All Devices(yj)" &&
    x3 === "Reflowable content"
  ) {
    document.getElementById("demo1").innerHTML = "Content Conversion - Reflowable Formats";
    document.getElementById("demo2").innerHTML = "YJLR Conversion issues";
    document.getElementById("demo3").innerHTML = "reflow-format-conversion SE";
    
    window.open('https://t.corp.amazon.com');
  } else if (
    x1 === "YJ" &&
    x2 === "All Devices(yj)" &&
    x3 === "Fixed Layout/Image Based / non kpf"
  ) {
    document.getElementById("demo1").innerHTML = "Content Conversion - Reflowable Formats";
    document.getElementById("demo2").innerHTML = "YJLR Conversion issues";
    document.getElementById("demo3").innerHTML = "reflow-format-conversion SE";
    
    window.open('https://t.corp.amazon.com');
  } else if (
    x1 === "YJ" &&
    x2 === "All Devices(yj)" &&
    x3 === "Fixed Layout/Image Based / kpf"
  ) {
    document.getElementById("demo1").innerHTML = "Content Conversion";
    document.getElementById("demo2").innerHTML = "Kindle Create";
    document.getElementById("demo3").innerHTML = "kindle-create-SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Content+Conversion&item=Kindle+Create&group=kindle-create-se&assignee=Nobody');
  } else if (x1 === "YJ" && x2 === "e-ink" && x3 === "None") {
    document.getElementById("demo1").innerHTML = "Content Rendering";
    document.getElementById("demo2").innerHTML = "Ereader-YJ";
    document.getElementById("demo3").innerHTML = "rendering SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Content+Rendering&item=Ereader-YJ&group=rendering+SE&assignee=Nobody');
  } else if (
    x1 === "YJ" &&
    x2 === "e-ink/ fire / ios devices (yj only)" &&
    x3 === "None"
  ) {
    document.getElementById("demo1").innerHTML = "Content Conversion - Reflowable Formats";
    document.getElementById("demo2").innerHTML = "YJLR Conversion issues";
    document.getElementById("demo3").innerHTML = "reflow-format-conversion SE";
    
    window.open('https://t.corp.amazon.com');
  } else if (x1 === "YJ" && x2 === "fos" && x3 === "None") {
    document.getElementById("demo1").innerHTML = "Content Rendering";
    document.getElementById("demo2").innerHTML = "LCD-YJ";
    document.getElementById("demo3").innerHTML = "KRF ticket resolvers SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Content+Rendering&item=LCD-YJ&group=KRF+ticket+resolvers+SE&assignee=Nobody');
  } else if (x1 === "YJ" && x2 === "ios" && x3 === "Reflowable content") {
    document.getElementById("demo1").innerHTML = "YJ";
    document.getElementById("demo2").innerHTML = "YJ Conversion";
    document.getElementById("demo3").innerHTML = "reflow-format-conversion SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=YJ&item=YJ+Conversion&group=reflow-format-conversion+SE&assignee=Nobody');
  } else if (x1 === "YJ" && x2 === "ios" && x3 === "Fixed content") {
    document.getElementById("demo1").innerHTML = "YJ";
    document.getElementById("demo2").innerHTML = "YJ Conversion";
    document.getElementById("demo3").innerHTML = "fixed-format-conversion SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=YJ&item=YJ+Conversion&group=fix-format-conversion+SE&assignee=Nobody');
  } else if (
    x1 === "YJ" &&
    x2 === "kindle for pc/ mac" &&
    x3 === "Fixed content"
  ) {
    document.getElementById("demo1").innerHTML = "Kindle";
    document.getElementById("demo2").innerHTML = "Kindle for PC";
    document.getElementById("demo3").innerHTML = "Kindle for desktop SE";
    
    window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Kindle&item=Kindle+for+PC&group=Kindle+for+Desktop+SE&assignee=Nobody');
  } else if (
    x1 === "YJ" &&
    x2 === "only kindle for ios (yj only)" &&
    x3 === "None"
  ) {
    document.getElementById("demo1").innerHTML = "Content Conversion - Reflowable Formats";
    document.getElementById("demo2").innerHTML = "YJLR Conversion issues";
    document.getElementById("demo3").innerHTML = "reflow-format-conversion SE";
    
    window.open('https://t.corp.amazon.com');
  } else if (
    x1 === "MOP/YJOP" &&
    x2 === "E-ink Devices Only" &&
    x3 === "None"
  ) {
    document.getElementById("demo1").innerHTML = "Content Conversion - Fixed Format";
    document.getElementById("demo2").innerHTML = "YJOP Conversion issues";
    document.getElementById("demo3").innerHTML = "fixed-format-conversion SE";
    
    window.open('https://t.corp.amazon.com');
  } else if (x1 === "MOP/YJOP" && x2 === "FOS Devices Only" && x3 === "None") {
    document.getElementById("demo1").innerHTML =
      "Content Conversion - Fixed Format";
    document.getElementById("demo2").innerHTML = "YJOP Conversion issues";
    document.getElementById("demo3").innerHTML = "fixed-format-conversion SE";
    
    window.open('https://t.corp.amazon.com');
  } else if (x1 === "MOP/YJOP" && x2 === "iOS Only" && x3 === "None") {
    document.getElementById("demo1").innerHTML =
      "Content Conversion - Fixed Format";
    document.getElementById("demo2").innerHTML = "YJOP Conversion issues";
    document.getElementById("demo3").innerHTML = "fixed-format-conversion SE";
    
    window.open('https://t.corp.amazon.com');
  } else {
    document.getElementById("demo1").innerHTML = x1;
    document.getElementById("demo2").innerHTML = x2;
    document.getElementById("demo3").innerHTML = x3;
    

    //   setTimeout(
    //     () =>
    //       window.open(
    //         "https://t.corp.amazon.com/create/options?title=ITB+NFCX+Audits+-+"
    //       ),
    //     500
    //   );
    //   function getElementByXpath(path) {
    //     return document.evaluate(
    //       path,
    //       document,
    //       null,
    //       XPathResult.FIRST_ORDERED_NODE_TYPE,
    //       null
    //     ).singleNodeValue;
    //   }
    //   var x1 = getElementByXpath(
    //     "//span[contains(text(),'Step 1: Choose a Category, Type, and Item (CTI)')]"
    //   );

    //   setTimeout(() => alert(x1.innerHTML), 10000);
  }
}
function dynamicdropdown1(listindex1) {
    document.getElementById("subcategory1").length = 0;
    switch (listindex1) {
      case "All_Formats":
        document.getElementById("subcategory1").options[0] = new Option(
          "Please select framework"
        );
        document.getElementById("subcategory1").options[1] = new Option(
          "E-ink Devices Only"
        );
        document.getElementById("subcategory1").options[2] = new Option(
          "FOS Devices Only"
        );
        break;
  
      case "KCR_Only":
        document.getElementById("subcategory1").options[0] = new Option(
          "Please select framework"
        );
        document.getElementById("subcategory1").options[1] = new Option("IOS");
        document.getElementById("subcategory1").options[2] = new Option(
          "Kindle Cloud Reader"
        );
  
        break;
      case "MOBI_only":
        document.getElementById("subcategory1").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory1").options[1] = new Option(
          "All devices"
        );
        document.getElementById("subcategory1").options[2] = new Option(
          "E-ink Devices Only"
        );
        document.getElementById("subcategory1").options[3] = new Option(
          "FOS Devices Only"
        );
        document.getElementById("subcategory1").options[4] = new Option(
          "iOS Only"
        );
  
        break;
      case "MOP/YJOP":
        document.getElementById("subcategory1").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory1").options[1] = new Option(
          "E-ink Devices Only"
        );
        document.getElementById("subcategory1").options[2] = new Option(
          "FOS Devices Only"
        );
        document.getElementById("subcategory1").options[3] = new Option(
          "iOS Only"
        );
  
        break;
  
      case "Non-YJ":
        document.getElementById("subcategory1").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory1").options[1] = new Option(
          "All Devices(non - yj)"
        );
        document.getElementById("subcategory1").options[2] = new Option(
          "Android"
        );
        document.getElementById("subcategory1").options[3] = new Option(
          "both fire and e-ink"
        );
        document.getElementById("subcategory1").options[4] = new Option(
          "ios/kcr"
        );
        document.getElementById("subcategory1").options[5] = new Option(
          "only e-ink"
        );
        document.getElementById("subcategory1").options[6] = new Option(
          "only fire tablet"
        );
        document.getElementById("subcategory1").options[7] = new Option("pc");
        break;
  
      case "YJ":
        document.getElementById("subcategory1").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory1").options[1] = new Option(
          "All Devices(yj)"
        );
        document.getElementById("subcategory1").options[2] = new Option("e-ink");
        document.getElementById("subcategory1").options[3] = new Option(
          "e-ink/ fire / ios devices (yj only)"
        );
        document.getElementById("subcategory1").options[4] = new Option("fos");
        document.getElementById("subcategory1").options[5] = new Option("ios ");
        document.getElementById("subcategory1").options[6] = new Option(
          "kindle for pc/ mac"
        );
        document.getElementById("subcategory1").options[7] = new Option(
          "only kindle for ios (yj only)"
        );
  
        break;
    }
    return true;
  }
  
  //**********************  Dynamic Select 2  **************************
  
  function dynamicdropdown2(listindex2) {
    document.getElementById("subcategory2").length = 0;
    switch (listindex2) {
      case "E-ink Devices Only":
        document.getElementById("subcategory2").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory2").options[1] = new Option("None");
        document.getElementById("subcategory2").options[2] = new Option("DOC");
        document.getElementById("subcategory2").options[3] = new Option("    ");
  
        break;
  
      case "FOS Devices Only":
        document.getElementById("subcategory2").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory2").options[1] = new Option(
          "(Both YJ[bird eye view enabled] and Mobi)"
        );
        document.getElementById("subcategory2").options[2] = new Option("DOC");
        document.getElementById("subcategory2").options[3] = new Option("    ");
        document.getElementById("subcategory2").options[4] = new Option("None");
  
        break;
      case "IOS":
        document.getElementById("subcategory2").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory2").options[1] = new Option("None");
        break;
      case "Kindle Cloud Reader":
        document.getElementById("subcategory2").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory2").options[1] = new Option("None");
        break;
      case "All devices":
        document.getElementById("subcategory2").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory2").options[1] = new Option(
          "Reflowable content"
        );
        document.getElementById("subcategory2").options[2] = new Option(
          "Fixed content"
        );
        break;
      case "E-ink Devices Only":
        document.getElementById("subcategory2").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory2").options[1] = new Option("    ");
        break;
  
      case "iOS Only":
        document.getElementById("subcategory2").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory2").options[1] = new Option(
          "Reflowable content"
        );
        document.getElementById("subcategory2").options[2] = new Option(
          "Fixed content"
        );
        document.getElementById("subcategory2").options[3] = new Option("None");
        break;
  
      case "All Devices(non - yj)":
        document.getElementById("subcategory2").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory2").options[1] = new Option(
          "DOC/DOCX/RTF"
        );
        document.getElementById("subcategory2").options[2] = new Option(
          "EPUB/HTML/Mobi"
        );
        document.getElementById("subcategory2").options[3] = new Option(
          "PDF/KPF inside PDF"
        );
        break;
  
      case "Android":
        document.getElementById("subcategory2").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory2").options[1] = new Option("None");
        break;
  
      case "both fire and e-ink":
        document.getElementById("subcategory2").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory2").options[1] = new Option("None");
        break;
  
      case "ios/kcr":
        document.getElementById("subcategory2").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory2").options[1] = new Option("None");
        break;
      case "ios/kcr":
        document.getElementById("subcategory2").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory2").options[1] = new Option("None");
        break;
      case "only e-ink":
        document.getElementById("subcategory2").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory2").options[1] = new Option("None");
        break;
      case "only fire tablet":
        document.getElementById("subcategory2").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory2").options[1] = new Option("None");
        break;
      case "pc":
        document.getElementById("subcategory2").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory2").options[1] = new Option("None");
        break;
  
      case "e-ink":
        document.getElementById("subcategory2").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory2").options[1] = new Option("None");
        break;
  
      case "fos":
        document.getElementById("subcategory2").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory2").options[1] = new Option("None");
        break;
  
      case "kindle for pc/ mac":
        document.getElementById("subcategory2").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory2").options[1] = new Option("None");
        break;
  
      case "only kindle for ios (yj only)":
        document.getElementById("subcategory2").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory2").options[1] = new Option("None");
        break;
  
      case "ios":
        document.getElementById("subcategory2").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory2").options[1] = new Option(
          "Reflowable content"
        );
        document.getElementById("subcategory2").options[2] = new Option(
          "Fixed content"
        );
        break;
  
      case "e-ink/ fire / ios devices (yj only)":
        document.getElementById("subcategory2").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory2").options[1] = new Option("None");
        break;
  
      case "All Devices(yj)":
        document.getElementById("subcategory2").options[0] = new Option(
          "Please select framework",
          ""
        );
        document.getElementById("subcategory2").options[1] = new Option(
          "Fixed content"
        );
        document.getElementById("subcategory2").options[2] = new Option(
          "Reflowable content"
        );
        document.getElementById("subcategory2").options[3] = new Option(
          "Fixed Layout/Image Based / non kpf"
        );
        document.getElementById("subcategory2").options[4] = new Option(
          "Fixed Layout/Image Based / kpf"
        );
        break;
    }
    return true;
  }
  function getElementByXpath(path) {
    return document.evaluate(
      path,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
  }
  
  function show() {
    var x1 = document.getElementById("category").value;
    var x2 = document.getElementById("subcategory1").value;
    var x3 = document.getElementById("subcategory2").value;
    // var x4 = document.getElementById("errCategory").value;
    console.log(x1 + "\n" + x2 + "\n" + x3);
  
    if (x1 === "All_Formats" && x2 === "E-ink Devices Only" && x3 === "None") {
      document.getElementById("demo1").innerHTML = "Mobi Tools";
      document.getElementById("demo2").innerHTML = "Kindle Tool";
      document.getElementById("demo3").innerHTML = "KindleGen SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+-+ISSUE&description=Hi,%0A%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A%0A%0A%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Mobi+Tools&item=KindleTool&group=KindleGen+SE&assignee=yj-se-oncall&tags=ITB_NFCX');
    } else if (
      x1 === "All_Formats" &&
      x2 === "E-ink Devices Only" &&
      x3 === "DOC"
    ) {
      document.getElementById("demo1").innerHTML = "Text Conversion";
      document.getElementById("demo2").innerHTML = "Conversion Quality issue";
      document.getElementById("demo3").innerHTML = "DTC SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Text+Conversion&item=Conversion+Quality+Issue&group=DTC+SE&assignee=Nobody');
    } else if (
      x1 === "All_Formats" &&
      x2 === "FOS Devices Only" &&
      x3 === "(Both YJ[bird eye view enabled] and Mobi)"
    ) {
      document.getElementById("demo1").innerHTML = "Mobi Tools";
      document.getElementById("demo2").innerHTML = "Kindle Tool";
      document.getElementById("demo3").innerHTML = "kindleGen SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Mobi+Tools&item=KindleTool&group=KindleGen+SE&assignee=Nobody');
    } else if (
      x1 === "All_Formats" &&
      x2 === "FOS Devices Only" &&
      x3 === "DOC"
    ) {
      document.getElementById("demo1").innerHTML = "Text Conversion";
      document.getElementById("demo2").innerHTML = "Conversion Quality issue";
      document.getElementById("demo3").innerHTML = "DTC SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Text+Conversion&item=Conversion+Quality+Issue&group=DTC+SE&assignee=Nobody');
    } else if (x1 === "KCR_Only" && x2 === "IOS" && x3 === "None") {
      document.getElementById("demo1").innerHTML = "Text Conversion";
      document.getElementById("demo2").innerHTML = "Content Analysis-Fixups";
      document.getElementById("demo3").innerHTML = "Kindle Cloud Reader SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Text+Conversion&item=Content+Analysis-Fixups&group=Kindle+Cloud+Reader+SE&assignee=Nobody');
    } else if (
      x1 === "KCR_Only" &&
      x2 === "Kindle Cloud Reader" &&
      x3 === "None"
    ) {
      document.getElementById("demo1").innerHTML = "Text Conversion";
      document.getElementById("demo2").innerHTML = "Content Analysis-Fixups";
      document.getElementById("demo3").innerHTML = "Kindle Cloud Reader SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Text+Conversion&item=Content+Analysis-Fixups&group=Kindle+Cloud+Reader+SE&assignee=Nobody');
    } else if (
      x1 === "MOBI_only" &&
      x2 === "All devices" &&
      x3 === "Reflowable content"
    ) {
      document.getElementById("demo1").innerHTML = "YJ";
      document.getElementById("demo2").innerHTML = "YJ Conversion";
      document.getElementById("demo3").innerHTML = "reflow-format-conversion SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=YJ&item=YJ+Conversion&group=reflow-format-conversion+SE&assignee=Nobody');
    } else if (
      x1 === "MOBI_only" &&
      x2 === "All devices" &&
      x3 === "Fixed content"
    ) {
      document.getElementById("demo1").innerHTML = "YJ";
      document.getElementById("demo2").innerHTML = "YJ Conversion";
      document.getElementById("demo3").innerHTML = "fixed-format-conversion SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=YJ&item=YJ+Conversion&group=fix-format-conversion+SE&assignee=Nobody');
    } else if (
      x1 === "MOBI_only" &&
      x2 === "iOS Only" &&
      x3 === "Reflowable content"
    ) {
      document.getElementById("demo1").innerHTML = "YJ";
      document.getElementById("demo2").innerHTML = "YJ Conversion";
      document.getElementById("demo3").innerHTML = "reflow-format-conversion SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=YJ&item=YJ+Conversion&group=reflow-format-conversion+SE&assignee=Nobody');
    } else if (
      x1 === "MOBI_only" &&
      x2 === "iOS Only" &&
      x3 === "Fixed content"
    ) {
      document.getElementById("demo1").innerHTML = "YJ";
      document.getElementById("demo2").innerHTML = "YJ Conversion";
      document.getElementById("demo3").innerHTML = "fixed-format-conversion SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=YJ&item=YJ+Conversion&group=fix-format-conversion+SE&assignee=Nobody');
    } else if (
      x1 === "MOBI_only" &&
      x2 === "E-ink Devices Only" &&
      x3 === "None"
    ) {
      document.getElementById("demo1").innerHTML = "Content Rendering";
      document.getElementById("demo2").innerHTML = "Ereader-YJ";
      document.getElementById("demo3").innerHTML = "rendering SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Content+Rendering&item=Ereader-YJ&group=rendering+SE&assignee=Nobody');
    } else if (x1 === "MOBI_only" && x2 === "FOS Devices Only" && x3 === "None") {
      document.getElementById("demo1").innerHTML = "Content Rendering";
      document.getElementById("demo2").innerHTML = "LCD-YJ";
      document.getElementById("demo3").innerHTML = "KRF ticket resolvers SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Content+Rendering&item=LCD-YJ&group=KRF+ticket+resolvers+SE&assignee=Nobody');
    } else if (
      x1 === "Non-YJ" &&
      x2 === "All Devices(non - yj)" &&
      x3 === "DOC/DOCX/RTF"
    ) {
      document.getElementById("demo1").innerHTML = "Text Conversion";
      document.getElementById("demo2").innerHTML = "Content Analysis-Fixups";
      document.getElementById("demo3").innerHTML = "Kindle Cloud Reader SE ";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Text+Conversion&item=Content+Analysis-Fixups&group=Kindle+Cloud+Reader+SE&assignee=Nobody');
    } else if (
      x1 === "Non-YJ" &&
      x2 === "All Devices(non - yj)" &&
      x3 === "EPUB/HTML/Mobi"
    ) {
      document.getElementById("demo1").innerHTML = "Mobi Tools";
      document.getElementById("demo2").innerHTML = "Mobigen";
      document.getElementById("demo3").innerHTML = "KindleGen SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Mobi+Tools&item=Mobigen&group=KindleGen+SE&assignee=Nobody');
    } else if (
      x1 === "Non-YJ" &&
      x2 === "All Devices(non - yj)" &&
      x3 === "PDF/KPF inside PDF"
    ) {
      document.getElementById("demo1").innerHTML = "Content Conversion";
      document.getElementById("demo2").innerHTML = "Fixed Format";
      document.getElementById("demo3").innerHTML = "MOP Conversion issues";
      
      window.open('https://t.corp.amazon.com');
    } else if (x1 === "Non-YJ" && x2 === "Android" && x3 === "None") {
      document.getElementById("demo1").innerHTML = "Kindle";
      document.getElementById("demo2").innerHTML = "Android";
      document.getElementById("demo3").innerHTML = "Kindle for Android SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Kindle&item=Android&group=Kindle+for+Android+SE&assignee=Nobody');
    } else if (x1 === "Non-YJ" && x2 === "both fire and e-ink" && x3 === "None") {
      document.getElementById("demo1").innerHTML = "Mobi Tools";
      document.getElementById("demo2").innerHTML = "Kindle Tool";
      document.getElementById("demo3").innerHTML = "Kindlegen SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Mobi+Tools&item=KindleTool&group=Kindlegen+SE&assignee=Nobody');
    } else if (x1 === "Non-YJ" && x2 === "ios/kcr" && x3 === "None") {
      document.getElementById("demo1").innerHTML = "Text Conversion";
      document.getElementById("demo2").innerHTML = "Content Analysis-Fixups";
      document.getElementById("demo3").innerHTML = "Kindle Cloud Reader SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Text+Conversion&item=Content+Analysis-Fixups&group=Kindle+Cloud+Reader+SE&assignee=Nobody');
    } else if (x1 === "Non-YJ" && x2 === "only e-ink" && x3 === "None") {
      document.getElementById("demo1").innerHTML = "Content Rendering";
      document.getElementById("demo2").innerHTML = "Ereader-NonYJ";
      document.getElementById("demo3").innerHTML = "rendering SE(E-ink device only)";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Content+Rendering&item=Ereader-NonYJ&group=rendering+SE&assignee=Nobody');
    } else if (x1 === "Non-YJ" && x2 === "only fire tablet" && x3 === "None") {
      document.getElementById("demo1").innerHTML = "Content Rendering";
      document.getElementById("demo2").innerHTML = "Android-NonYJ";
      document.getElementById("demo3").innerHTML = "KRF ticket resolvers SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Content+Rendering&item=Android-NonYJ&group=KRF+ticket+resolvers+SE&assignee=Nobody');
    } else if (x1 === "Non-YJ" && x2 === "pc" && x3 === "None") {
      document.getElementById("demo1").innerHTML = "Kindle";
      document.getElementById("demo2").innerHTML = "Kindle for PC";
      document.getElementById("demo3").innerHTML = "Kindle for desktop SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Kindle&item=Kindle+for+PC&group=Kindle+for+Desktop+SE&assignee=Nobody');
    } else if (
      x1 === "YJ" &&
      x2 === "All Devices(yj)" &&
      x3 === "Fixed content"
    ) {
      document.getElementById("demo1").innerHTML = "YJ";
      document.getElementById("demo2").innerHTML = "YJ Conversion";
      document.getElementById("demo3").innerHTML = "fixed-format-conversion SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=YJ&item=YJ+Conversion&group=fix-format-conversion+SE&assignee=Nobody');
    } else if (
      x1 === "YJ" &&
      x2 === "All Devices(yj)" &&
      x3 === "Reflowable content"
    ) {
      document.getElementById("demo1").innerHTML = "Content Conversion - Reflowable Formats";
      document.getElementById("demo2").innerHTML = "YJLR Conversion issues";
      document.getElementById("demo3").innerHTML = "reflow-format-conversion SE";
      
      window.open('https://t.corp.amazon.com');
    } else if (
      x1 === "YJ" &&
      x2 === "All Devices(yj)" &&
      x3 === "Fixed Layout/Image Based / non kpf"
    ) {
      document.getElementById("demo1").innerHTML = "Content Conversion - Reflowable Formats";
      document.getElementById("demo2").innerHTML = "YJLR Conversion issues";
      document.getElementById("demo3").innerHTML = "reflow-format-conversion SE";
      
      window.open('https://t.corp.amazon.com');
    } else if (
      x1 === "YJ" &&
      x2 === "All Devices(yj)" &&
      x3 === "Fixed Layout/Image Based / kpf"
    ) {
      document.getElementById("demo1").innerHTML = "Content Conversion";
      document.getElementById("demo2").innerHTML = "Kindle Create";
      document.getElementById("demo3").innerHTML = "kindle-create-SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Content+Conversion&item=Kindle+Create&group=kindle-create-se&assignee=Nobody');
    } else if (x1 === "YJ" && x2 === "e-ink" && x3 === "None") {
      document.getElementById("demo1").innerHTML = "Content Rendering";
      document.getElementById("demo2").innerHTML = "Ereader-YJ";
      document.getElementById("demo3").innerHTML = "rendering SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Content+Rendering&item=Ereader-YJ&group=rendering+SE&assignee=Nobody');
    } else if (
      x1 === "YJ" &&
      x2 === "e-ink/ fire / ios devices (yj only)" &&
      x3 === "None"
    ) {
      document.getElementById("demo1").innerHTML = "Content Conversion - Reflowable Formats";
      document.getElementById("demo2").innerHTML = "YJLR Conversion issues";
      document.getElementById("demo3").innerHTML = "reflow-format-conversion SE";
      
      window.open('https://t.corp.amazon.com');
    } else if (x1 === "YJ" && x2 === "fos" && x3 === "None") {
      document.getElementById("demo1").innerHTML = "Content Rendering";
      document.getElementById("demo2").innerHTML = "LCD-YJ";
      document.getElementById("demo3").innerHTML = "KRF ticket resolvers SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Content+Rendering&item=LCD-YJ&group=KRF+ticket+resolvers+SE&assignee=Nobody');
    } else if (x1 === "YJ" && x2 === "ios" && x3 === "Reflowable content") {
      document.getElementById("demo1").innerHTML = "YJ";
      document.getElementById("demo2").innerHTML = "YJ Conversion";
      document.getElementById("demo3").innerHTML = "reflow-format-conversion SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=YJ&item=YJ+Conversion&group=reflow-format-conversion+SE&assignee=Nobody');
    } else if (x1 === "YJ" && x2 === "ios" && x3 === "Fixed content") {
      document.getElementById("demo1").innerHTML = "YJ";
      document.getElementById("demo2").innerHTML = "YJ Conversion";
      document.getElementById("demo3").innerHTML = "fixed-format-conversion SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=YJ&item=YJ+Conversion&group=fix-format-conversion+SE&assignee=Nobody');
    } else if (
      x1 === "YJ" &&
      x2 === "kindle for pc/ mac" &&
      x3 === "Fixed content"
    ) {
      document.getElementById("demo1").innerHTML = "Kindle";
      document.getElementById("demo2").innerHTML = "Kindle for PC";
      document.getElementById("demo3").innerHTML = "Kindle for desktop SE";
      
      window.open('https://t.corp.amazon.com/create/options?title=ITB+Audits+-+ASIN+-+ISSUE&description=Hi,%0A%0A%0AASIN%3A+%0ATITLE%3A+%0AVENDOR+CODE%3A++%0AERROR+CATEGORY%3A+++%0A%0AISSUE+DESCRIPTION+%3A+%0A%0ADEVICE+INFORMATION+%3A%0ACUSTOMER+ID%3A%0ADEVICE+NAME+%3A%0ADSN+%3A%0ALOGS+%3A+%0A%0AScreenshot+attached+for+your+reference+this.%0A&ticket_type=Regular+Ticket&severity=FIVE&category=Digital+Media+Technology&type=Kindle&item=Kindle+for+PC&group=Kindle+for+Desktop+SE&assignee=Nobody');
    } else if (
      x1 === "YJ" &&
      x2 === "only kindle for ios (yj only)" &&
      x3 === "None"
    ) {
      document.getElementById("demo1").innerHTML = "Content Conversion - Reflowable Formats";
      document.getElementById("demo2").innerHTML = "YJLR Conversion issues";
      document.getElementById("demo3").innerHTML = "reflow-format-conversion SE";
      
      window.open('https://t.corp.amazon.com');
    } else if (
      x1 === "MOP/YJOP" &&
      x2 === "E-ink Devices Only" &&
      x3 === "None"
    ) {
      document.getElementById("demo1").innerHTML = "Content Conversion - Fixed Format";
      document.getElementById("demo2").innerHTML = "YJOP Conversion issues";
      document.getElementById("demo3").innerHTML = "fixed-format-conversion SE";
      
      window.open('https://t.corp.amazon.com');
    } else if (x1 === "MOP/YJOP" && x2 === "FOS Devices Only" && x3 === "None") {
      document.getElementById("demo1").innerHTML =
        "Content Conversion - Fixed Format";
      document.getElementById("demo2").innerHTML = "YJOP Conversion issues";
      document.getElementById("demo3").innerHTML = "fixed-format-conversion SE";
      
      window.open('https://t.corp.amazon.com');
    } else if (x1 === "MOP/YJOP" && x2 === "iOS Only" && x3 === "None") {
      document.getElementById("demo1").innerHTML =
        "Content Conversion - Fixed Format";
      document.getElementById("demo2").innerHTML = "YJOP Conversion issues";
      document.getElementById("demo3").innerHTML = "fixed-format-conversion SE";
      
      window.open('https://t.corp.amazon.com');
    } else {
      document.getElementById("demo1").innerHTML = x1;
      document.getElementById("demo2").innerHTML = x2;
      document.getElementById("demo3").innerHTML = x3;
      
  
      //   setTimeout(
      //     () =>
      //       window.open(
      //         "https://t.corp.amazon.com/create/options?title=ITB+NFCX+Audits+-+"
      //       ),
      //     500
      //   );
      //   function getElementByXpath(path) {
      //     return document.evaluate(
      //       path,
      //       document,
      //       null,
      //       XPathResult.FIRST_ORDERED_NODE_TYPE,
      //       null
      //     ).singleNodeValue;
      //   }
      //   var x1 = getElementByXpath(
      //     "//span[contains(text(),'Step 1: Choose a Category, Type, and Item (CTI)')]"
      //   );
  
      //   setTimeout(() => alert(x1.innerHTML), 10000);
    }
  }
  