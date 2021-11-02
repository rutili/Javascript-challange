showData();

function showData() {
    d3.select('tbody').html('');
    var sel = d3.select('input').node().value

    console.log(sel);
    var filteredData = sel ? data.filter(obj=>obj.datetime==sel) : data;

    filteredData.forEach(obj => {
        var row = d3.select('tbody').append('tr');

        Object.values(obj).forEach(val=>{
            row.append('td').text(val);
        });
    });
};

d3.select('button').on('click', showData);