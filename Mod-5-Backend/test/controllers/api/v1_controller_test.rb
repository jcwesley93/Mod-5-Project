require 'test_helper'

class Api::V1ControllerTest < ActionDispatch::IntegrationTest
  test "should get MakeUpBagProducts" do
    get api_v1_MakeUpBagProducts_url
    assert_response :success
  end

end
