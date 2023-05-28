# n = int(input())

# def bracket(count, s='', left=0, right=0):
#     if left == count and right == count:
#         print(s)
#     else:
#         if left < count:
#             bracket(count, s + '(', left+1, right)
#         if right < left:
#             bracket(count, s + ')', left, right+1)

# bracket(n)
import queue

n = int(input())

class City:
    def __init__(self, x, y):
        self.x = int(x)
        self.y = int(y)

    def distanceTo(self, anotherCity):
        return abs(self.x - anotherCity.x) + abs(self.y - anotherCity.y)
    
    def xy(self):
        return str(self.x) + ' ' + str(self.y)


cityMap = []
for i in range(n):
    temp = input().split(' ')
    cityMap.append(City(temp[0],temp[1]))

maxLenth = int(input())

fromTo = input().split(' ')
strt = int(fromTo[0])-1
end = int(fromTo[1])-1


adj = []
for city in cityMap:
    temp = []
    for i in range(len(cityMap)):
        if city != cityMap[i] and city.distanceTo(cityMap[i])<=maxLenth:
            temp.append(i)
    adj.append(temp)


inf = float('inf')

def bsf(start, graph):
    visited = []
    dist = []
    q = queue.Queue()

    for i in range(len(graph)):
        visited.append(0)
        dist.append(inf)

    visited[start] = 1
    dist[start] = 0
    q.put(start)

    while not q.empty():
        v = q.get()

        for i in graph[v]:
            if not visited[i]:
                visited[i] = 1
                dist[i] = dist[v] + 1
                q.put(i)

    return dist

allDists = bsf(strt, adj)

print(allDists)