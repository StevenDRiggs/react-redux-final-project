require 'faker'


15.times do
  Image.create(url: "https://picsum.photos/#{(100..300).to_a.sample}")
end

3.times do
  User.create(username: Faker::Name.first_name + (Random.rand * 100).floor.to_s, avatar: "https://picsum.photos/100", password: 'password')
end

for i in (1..((Random.rand * 3).floor + 1)) do
  u = User.find(i)
  images = []
  (Random.rand * 5).floor.times do
    u.images << Image.all.sample
  end
  u.save
end
