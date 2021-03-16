require_relative 'player'
require 'byebug'

# debsugger
class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = Player.new(name1, 1)
    @name2 = Player.new(name2, 2)

    @cups = Array.new(14) {Array.new}
    (0...cups.length).each do |i|
      if i != 6 && i != cups.length - 1
        4.times { cups[i] << :stone }
      end
    end
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
  end

  def valid_move?(start_pos)
    if !start_pos.between?(0, 13) 
      raise "Invalid starting cup" 
      return false
    end

    if cups[start_pos].empty?
      raise 'Starting cup is empty' 
      return false
    end

    true
  end

  def make_move(start_pos, current_player_name)
    if valid_move?(start_pos)
      cup = cups[start_pos]
      num = cup.length
      ending_cup_idx = (start_pos + num) % 13
      
      (0...num).each do |i|
        j = start_pos + 1
        current_cup = cups[(i + j) % 13]
        current_idx = cups.index(current_cup)
        
        if current_player_name == @name1.name && current_idx != 13
            current_cup << cup.pop
        elsif current_player_name == @name2.name && cups.index(current_cup) != 6
            current_cup << cup.pop
        end

      end

      render
      next_turn(ending_cup_idx)
      
    end
  end

  def next_turn(ending_cup_idx)
    if @cups[ending_cup_idx].length == 1
      return :switch
    elsif ending_cup_idx == 13 || ending_cup_idx == 6
      return :prompt
    else 
      return ending_cup_idx
    end
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    return true if cups[0..5].all? { |ele| ele.empty? }
    return true if cups[7..12].all? { |ele| ele.empty? }
    false
  end

  def winner
    return current_player_name if one_side_empty?
  end
end
