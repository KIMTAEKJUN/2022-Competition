const get = (ele) => {
    return document.querySelector(ele);
};

get('.menuBar').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'block';
});
get('.modal_close').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none';
});