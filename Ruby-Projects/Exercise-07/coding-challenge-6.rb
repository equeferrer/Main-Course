# Disemvowel Trolls
# Trolls are attacking your comment section! A common way to 
# deal with this situation is to remove all of the vowels from the trolls' 
# comments, neutralizing the threat. Your task is to write a function that 
# takes a string and return a new string with all vowels removed. 
# **For example:** "This website is for losers LOL!" => "Ths wbst s fr lsrs LL!".


# def remove_vowels(word)
#   word.delete("aeiouAEIOU")
# end

# puts remove_vowels("This website is for losers LOL!")

def remove_vowel(word)
  word_array = word.chars
  vowels = ["a","e","i","o","u"]
  new_word = []
  for letter in word_array
    if vowels.include?(letter.downcase)
      nil
    else 
      new_word << letter
    end
  end
  return new_word.join
end

print remove_vowel("This website is for losers LOL!")
