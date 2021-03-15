require 'set'
require 'byebug'

class GraphNode
    
    attr_reader :val, :neighbors

    def initialize(val)
        @val = val
        @neighbors = []
    end

    def neighbors=(node)
        self.neighbors << node
    end

    def bfs(node, target)

        arr = [node]
        set = Set.new()

        while !arr.empty?
            # debugger
            checking = arr.shift

            if !set.include?(checking)
                return checking.val if checking.val == target

                set.add(checking)
                arr += checking.neighbors
            end
        end

        return nil
    end

    
end

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]

p a.bfs(a, 'b')