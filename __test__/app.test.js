const{getServersNumber } = require('../index');

describe('number of servers', () => {

  test('test to have specific number', () => {
    let appsReources = [
        {'name': 'oracle1','ram' : 2, 'cpu' : 2, 'storage' : 2000 },
        {'name': 'oracle2','ram' : 3, 'cpu' : 4, 'storage' : 1000 },
        {'name': 'oracle3','ram' : 1, 'cpu' : 2, 'storage' : 1000 },
    ];
    let serverResources = {'ram' : 3, 'cpu' : 4, 'storage' : 3000};

    expect(getServersNumber(appsReources, serverResources)).toBe(2);
  });
  
  test('worst case', () => {
    let appsReources = [
      {'name': 'oracle1','ram' : 2, 'cpu' : 0, 'storage' : 0 },
      {'name': 'oracle2','ram' : 2, 'cpu' : 0, 'storage' : 0 },
      {'name': 'oracle3','ram' : 2, 'cpu' : 0, 'storage' : 0 },
  ];
  let serverResources = {'ram' : 3, 'cpu' : 4, 'storage' : 3000};

    expect(getServersNumber(appsReources, serverResources)).toBe(3);
  });
  
    
  test('best case', () => {
    let appsReources = [
      {'name': 'oracle1','ram' : 1, 'cpu' : 2, 'storage' : 2000 },
      {'name': 'oracle2','ram' : 1, 'cpu' : 2, 'storage' : 1000 },
  ];
  let serverResources = {'ram' : 3, 'cpu' : 4, 'storage' : 3000};

    expect(getServersNumber(appsReources, serverResources)).toBe(1);
  });

      
  test('bigger number', () => {
    let appsReources = [
      {'name': 'oracle1','ram' : 1, 'cpu' : 2, 'storage' : 0 },
      {'name': 'oracle2','ram' : 1, 'cpu' : 2, 'storage' : 0 },
      {'name': 'oracle3','ram' : 2, 'cpu' : 2, 'storage' : 0 },
      {'name': 'oracle4','ram' : 1, 'cpu' : 2, 'storage' : 0 },
      {'name': 'oracle5','ram' : 1, 'cpu' : 2, 'storage' : 0 },
      {'name': 'oracle6','ram' : 1, 'cpu' : 2, 'storage' : 0 },
      {'name': 'oracle7','ram' : 1, 'cpu' : 2, 'storage' : 0 },
      {'name': 'oracle8','ram' : 1, 'cpu' : 2, 'storage' : 0 },
  ];
  let serverResources = {'ram' : 3, 'cpu' : 6, 'storage' : 3000};

    expect(getServersNumber(appsReources, serverResources)).toBe(3);
  });
});