# Century From Year
# The first century spans from the year 1 up to and including the year 100, 
# The second - from the year 101 up to and including the year 200, etc.

# Task:
# Given a year, return the century it is in.
# Examples :

def centuryFromYear(year)
  if (year%100 == 0)
    return (year/100)
  else 
    return (year/100) + 1
  end
end


puts centuryFromYear(1705) # => 18
puts centuryFromYear(1900) # => 19
puts centuryFromYear(1601) # => 17
puts centuryFromYear(2000) # => 20