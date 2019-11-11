class User < ApplicationRecord
  has_many: games

  validates :name, presence: true
  validates :name, length: {maximum: 3}
  validates :name, length: {minimum: 3}

  
end
