# Isograms
# An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
# Implement a function that determines whether a string that contains only letters is an isogram. 
# Assume the empty string is an isogram. Ignore letter case.
# Tip: Output must be boolean
# For example:
# is_isogram("Dermatoglyphics" ) => true
# is_isogram("aba" ) => false
# is_isogram("moOse" ) => false # -- ignore letter case

def is_isogram(word)
  new_word = word.downcase.split('')
  letter_list = []
  for letter in new_word
    if letter_list.include?(letter)
      return false
    else 
      letter_list << letter
    end
  end
  return true
end

puts is_isogram("Dermatoglyphics" ) # => true
puts is_isogram("aba" ) # => false
puts is_isogram("moOse" ) # => false -- ignore letter case
