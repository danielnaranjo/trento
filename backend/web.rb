#web.rb
require 'sinatra'
require 'omniauth-twitter'
require 'twitter'

use OmniAuth::Builder do
	provider :twitter, 'kVdTORs1LCUtcJXDE5AXm1WW9','pPZ6uJPEyT1jWyi0N00yNa1c18w79zDBqht3rL2GvvkIR3vYBf'
end

configure do
	enable :sessions
end

helpers do
	def admin?
		session[:admin]
	end
end

get '/' do
  "<h3>Hey! Hey! Welcome to Trento public API</h3><p>Trento is a demo assigment for <a href=\"//real-trends.com/?utm_source=trento&utm_campaing=assigments&utm_medium=referral\" target=\"_blank\">Real Trends</a></p><p>Crafted by <a href=\"//danielnaranjo.info/?utm_source=trento&utm_campaing=assigments&utm_medium=referral\" target=\"_blank\">Daniel Naranjo</a></p>"
end

get '/private' do
	halt(401,'Not Authorized') unless admin?
	"Private party! Please check in lobby to get in."
end

get '/login' do
	#session[:admin] = true
	#"You're Logged"
	redirect to ('/auth/twitter')
end

get '/auth/twitter/callback' do
	#env['omniauth.auth'] ? session[:admin] = true : halt(401,'Not Authorized')
	#"You're in!"
	session[:admin] = true
	session[:username] = env['omniauth.auth']['info']['name']
	"<h3> #{session[:username]}!</h3>"
end

get '/auth/failure' do
	params[:message]
end


get '/logout' do
	session[:admin] = nil
	"You're Out!"
end