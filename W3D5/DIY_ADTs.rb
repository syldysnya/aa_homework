class Stack
    def initialize
      @arrays = []
    end

    def push(el)
      @arrays.push(el)
    end

    def pop
      @arrays.pop
      @arrays
    end

    def peek
      @arrays.last
    end
  end

  # p b = Stack.new
  # p b.push(1)
  # p b.push(9)
  # p b.pop
  # p b.peek

  class Queue
    def initialize
      @arrays = []
    end

    def enqueue(el)
      @arrays.unshift(el)
    end

    def dequeue
      @arrays.shift
      @arrays
    end

    def peek
      @arrays.first
    end
  end

  # c = Queue.new
  # p c.enqueue("a")
  # p c.enqueue("b")
  # p c.dequeue
  # p c.peek

  class Map
    def initialize
      @mapped = Hash.new { |h, k| h[k] = [] }
    end

    def set(key, value)
      @mapped[key] << value
      @mapped
    end

    def get(key)
      return key if @mapped.has_key?(key)
    end

    def delete(key)
      @mapped.delete(key)
    end

    def show
      keys = @mapped.keys
      values = @mapped.values
      zipped = keys.zip(values)
      zipped
    end

  end

  my_map = Map.new
  my_map.set(1, "a")
  my_map.set(2, "b")
  my_map.set(1, "aa")
  my_map.set(3, "c")
  p my_map.delete(2)
  p my_map.show