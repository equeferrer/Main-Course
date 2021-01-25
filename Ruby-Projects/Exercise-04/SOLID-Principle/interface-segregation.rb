#Interface Segragation Principle

class Employee
  def calculate_salary(base_pay, tax)
    salary = (base_pay - tax)
  end
  
  # separate storage into database
  def store(salary)
    puts salary
  end
end