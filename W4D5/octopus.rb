def sluggish_octo(arr)
    long_f = arr.first

    (0...arr.length).each do |i|
        (i+1...arr.length).each do |j|
            if arr[i].length > arr[j].length && arr[i].length > long_f.length
                long_f = arr[i]
            else
                long_f = arr[j]
            end
        end
    end

    long_f
end

def dominant_octo(arr)
    return arr if arr.length <= 1

    mid = arr.length / 2

    left = dominant_octo(arr.take(mid))
    right = dominant_octo(arr.drop(mid))

    merged = []

    until left.empty? || right.empty?
        case left.first.length <=> right.first.length
        when 1
            merged << right.shift
        else
            merged << left.shift
        end
    end

    merged.concat(left)
    merged.concat(right)

    merged
end

def dominant_octo!(arr)
    merged = dominant_octo(arr)
    merged.last
end

def clever_octo(arr)
    arr.max { |a, b| a.length <=> b.length }
end

def slow_dance(move, arr)
    hash = Hash.new
    arr.each_with_index { |ele, i| hash[ele] = i }
    hash[move]
end

tiles = {
    "up"=>0,
    "right-up"=>1,
    "right"=>2,
    "right-down"=>3,
    "down"=>4,
    "left-down"=>5,
    "left"=>6,
    "left-up"=>7
}
def constant_dance(move, tiles)
    tiles[move]
end

tiles_array = [
    "up", "right-up", "right", "right-down",
    "down", "left-down", "left",  "left-up" 
]
arr1 = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
p sluggish_octo(arr1)
p dominant_octo!(arr1)
p clever_octo(arr1)
p slow_dance('up', tiles_array)
p slow_dance('right-down', tiles_array)
p constant_dance("up", tiles)
p constant_dance('left-down', tiles)