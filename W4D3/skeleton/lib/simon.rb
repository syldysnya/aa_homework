class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until @game_over == true
      take_turn
    end
    
    if @game_over == true
      game_over_message
      reset_game
    end
  end
  
  def take_turn
    puts "New round:"
    show_sequence
    sleep(2)
    system("clear")
    
    if seq != require_sequence
      @game_over = true
      return
    end
    
    puts "number of inputs: #{@sequence_length += 1}"
    round_success_message
  end
  
  def show_sequence
    add_random_color
    puts "#{seq.join(" ")}"
  end 
  
  def require_sequence
    puts "Enter the seq"
    input = gets.chomp.split
  end
  
  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
    puts 'Well done! Keep doing it.'
  end

  def game_over_message
    puts "You lost. Try again!"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end
