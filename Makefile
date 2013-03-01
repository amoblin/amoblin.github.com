default:
	jekyll
	cd ../git-repos/amoblin-blog-git;
	#git add -A;git ci -m "update blog";git push

preview:
	jekyll --server
	cp -r github.git _site/.git

update: default
	cd _site;git add -A;git ci -m "更新";git push
	rm -rf github.git
	cp -r _site/.git github.git
