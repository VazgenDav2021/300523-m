Методы Promise-а

1. Promise.all это метод, который принимает массив промисов и ждет пока все промисы в масиве не завершатся. Если все они успешно азвершаются Promise.all возращает новый промис. который разрешает массивом результатов в том же порядке в отором были передены исходные промисы

2. Promise.allSettled - это метод, который принимает массив промисов и ждет, пока все промисы заветшатся, сезависимо от их сотстояния (успешно или с ошибкой). В результате данны метод возращает нобый промис который разрешается массивом обьщектов описывающих состояниз каждого промиса

3. Promise.race - Этот метдо, который принимает массив промисов и ждет, пока первый из них завершится будь то успшеной или с ошибкой. После завершение первого промиса, Promse.race возращает новый промис, который разрешается резульатом этого первого заверешния промиса