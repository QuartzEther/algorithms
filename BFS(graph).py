import queue

# ввод кол-ва узлов
n = int(input())

# Класс для узла (что бы иметь возможность высчитать растояние от точки до любой другой)
class City:
    def __init__(self, x, y):
        self.x = int(x)
        self.y = int(y)

    def distanceTo(self, anotherCity):
        return abs(self.x - anotherCity.x) + abs(self.y - anotherCity.y)
    
    def xy(self):
        return str(self.x) + ' ' + str(self.y)

# Ввод массива узлов (class City (x, y)) с клавиатуры
cityMap = []
for i in range(n):
    temp = input().split(' ')
    cityMap.append(City(temp[0],temp[1]))

# Макс длина ребра между узлами
maxLenth = int(input())

# Узел от которого нужно узнать растояние до остальных
strt = int(input())-1

# Создание графа
adj = []
for city in cityMap:
    temp = []
    for i in range(len(cityMap)):
        if city != cityMap[i] and city.distanceTo(cityMap[i])<=maxLenth:
            temp.append(i)
    adj.append(temp)


inf = float('inf')

# BFS
def bsf(start, graph):
    fr = [] #для поиска пути аля from
    dist = []
    q = queue.Queue()

    for i in range(len(graph)):
        dist.append(inf)
        fr.append(-1)

    dist[start] = 0
    q.put(start)

    while not q.empty():
        v = q.get()

        for i in graph[v]:
            if dist[i] > dist[v] + 1:
                dist[i] = dist[v] + 1
                fr[i] = v
                q.put(i)

    return [dist, fr]


# Путь до конечной точки
def fromCity(end, fr):
    path = []
    while end != -1:
        path.append(end)
        end = fr[end]

    path.reverse()
    return path



# Вывод
print(fromCity(5, bsf(strt, adj)[1]), bsf(strt, adj)[1])