function runCode() {
  const editor = document.getElementById('editor');
  const output = document.getElementById('output');
  const userCode = editor.value;

  // Dynamically update the iframe content
  output.srcdoc = userCode;
}

