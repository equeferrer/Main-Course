# Dependency Inversion Principle 

class Person
  def initialize(name)
    @name = name
  end

  def blog(post, platform)
    platform.blog(post)
  end
end 

class Tumblr
  def blog(post)
    puts post 
  end
end

jerick = Person.new("Jerick")
jerick.blog("Savage Love!", Tumblr)