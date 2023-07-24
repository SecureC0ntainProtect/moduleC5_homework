const xml = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xml, 'text/xml');
const students = Array.from(xmlDoc.getElementsByTagName('student')).map((studentNode) => {
  const nameNode = studentNode.getElementsByTagName('name')[0];
  const firstName = nameNode.getElementsByTagName('first')[0].textContent;
  const lastName = nameNode.getElementsByTagName('second')[0].textContent;
  const age = parseInt(studentNode.getElementsByTagName('age')[0].textContent);
  const prof = studentNode.getElementsByTagName('prof')[0].textContent;
  const lang = nameNode.getAttribute('lang');

  return { name: `${firstName} ${lastName}`, age, prof, lang };
});

const jsObject = { list: students };
console.log(jsObject);
