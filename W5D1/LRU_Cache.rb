class LRUCache

    attr_reader :size, :table

    def initialize(size)
        @size = size
        @table = []
    end

    def count
        @table.size
    end

    def add(el)
        if !@table.include?(el)
            @table.push(el) 
        else
            @table.delete(el)
            @table.push(el)
        end
        @table.shift if self.count > @size
    end

    def show
        print @table
    end

end

johnny_cache = LRUCache.new(4)

johnny_cache.add("I walk the line")
johnny_cache.add(5)

johnny_cache.count # => returns 2

johnny_cache.add([1,2,3])
johnny_cache.add(5)
johnny_cache.add(-5)
johnny_cache.add({a: 1, b: 2, c: 3})
johnny_cache.add([1,2,3,4])
johnny_cache.add("I walk the line")
johnny_cache.add(:ring_of_fire)
johnny_cache.add("I walk the line")
johnny_cache.add({a: 1, b: 2, c: 3})

johnny_cache.show