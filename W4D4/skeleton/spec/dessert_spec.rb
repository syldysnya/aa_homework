require 'rspec'
require 'dessert'
require 'chef'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef", name => "James") }
  subject(:dessert) do
    Dessert.new("Erica", 5, chef)
  end


  describe "#initialize" do
    it "sets a type"
      expect(dessert.type).to eq("brownie")
    end

    it "sets a quantity"
      expect(dessert.quantity).to eq(5)
    end

    it "starts ingredients as an empty array"
      expect(dessert.ingredients.empty?).to eq(true)
    end

    it "raises an argument error when given a non-integer quantity"
      expect { error_raiser('error')}.to raise_error(ArgumentError)
    end
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array"
      expect(dessert.ingredients).to_not include('water')
      dessert.add_ingredient('water')
      expect(dessert.ingredients).to include('water')
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      dessert.ingredients.shuffle
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      dessert.ingredients.length

    it "raises an error if the amount is greater than the quantity"
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name"
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in"
  end
end
