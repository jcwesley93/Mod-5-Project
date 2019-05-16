class AddUserIdToMakeupBags < ActiveRecord::Migration[5.2]
  def change
    add_column :makeup_bags, :user_id, :integer
  end
end
