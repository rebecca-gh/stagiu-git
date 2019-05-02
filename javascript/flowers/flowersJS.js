function create() {
    // create html template
    var main = document.querySelector('main');
    var header = document.createElement('header');
    var section = document.createElement('section');
    var footer = document.createElement('footer');
    main.appendChild(header);
    main.appendChild(section);
    main.appendChild(footer);
    var div = document.createElement('div');
    section.appendChild(div);
    var text = ['lorem ipsum 1', 'lorem ipsum 2', 'lorem ipsum 3', 'lorem ipsum 4'];
    text.forEach(function (content) {
        var para = document.createElement('p');
        para.textContent = content;
        div.appendChild(para);
    });

}
create();