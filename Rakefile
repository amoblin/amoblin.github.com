# -*_ coding:utf-8

desc "build the html page"
task :default do
    #sh "cp -r ~/.MarkBook/source/media ."
	system "jekyll"
end

desc "local server to preview"
task :preview do
	system "jekyll --server"
end

task :st do
   system "cd ../git-repos/amoblin-blog-git;git status"
end

task :diff do
   system "cd ../amoblin-blog-git;git diff"
end

task :add do
   system "cd ../amoblin-blog-git;git add -A"
end

task :ci do
   system "cd ../amoblin-blog-git;git ci"
end

task :push do
   system "cd ../amoblin-blog-git;git push"
end
