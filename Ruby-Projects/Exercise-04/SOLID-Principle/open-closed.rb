# Open/Closed Principle

class Employee
    def initialize(full_name, employee_id)
        @full_name = full_name
        @employee_id = employee_id
    end
end

class Bartender < Employee
end