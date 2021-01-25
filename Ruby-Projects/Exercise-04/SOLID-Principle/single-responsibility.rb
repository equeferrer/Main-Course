# Single Responsibility Principle
class ReportTotals 
  def initialize(total_parties, total_tables, total_sales)
    @total_parties = total_parties
    @total_tables = total_tables
    @total_sales = total_sales
  end

  def print_totals
    puts @total_parties 
    puts @total_tables
    puts @total_sales
  end
end

class ReportTurnover
  def initialize(total_parties, total_tables, total_sales)
    @total_parties = total_parties.to_i
    @total_tables = total_tables.to_i
    @total_sales = total_sales.to_i
  end

  def turnover
    @total_parties/@total_tables
  end

  def ave_bill_turnover
    puts (@total_sales/ turnover)
  end
end 

total = ReportTotals.new(40,10,100).print_totals
turnover = ReportTurnover.new(40,10,100).ave_bill_turnover