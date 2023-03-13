let generateExcelButton = document.getElementById('export-btn')
let table = document.getElementById("minha-tabela"); // substitua "minha-tabela" pelo ID da sua tabela

generateExcelButton.onclick = () => {
    let wb = XLSX.utils.table_to_book(table, {sheet:"Sheet JS"}); // transforma a tabela em uma planilha do Excel
    let wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'}); // transforma o planilha do Excel em um arquivo binário
    function transformDocument(s) { // define a função s2ab para converter uma string em um ArrayBuffer
        let buf = new ArrayBuffer(s.length);
        let view = new Uint8Array(buf);
        for (let i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
    saveAs(new Blob([transformDocument(wbout)],{type:"application/octet-stream"}), 'minha-planilha.xlsx'); // salva o arquivo Excel
}