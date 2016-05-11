## VideoAmp Code Test

To start:

make sure mongo is running or run
```
mongod
```
in a separate terminal window run
```
 node server.js
```

runs at

```
http://localhost:3000/
```

test with

```
npm test
```

#### 1.Write javascript that would be injected on a page and run within the context of an iFrame

Done in public/ad.html.

#### 2.This script should send a native XHR POST request with JSON detailing the number of display ads and their sizes (say 300x250, 160x200, video ads)

Done in public/ad.html.

#### 3.Describe (in either inline comments or in summary) about your methodology for determining whether something is an ad

Done at the top of public/ad.html

#### 4.Describe other possible metadata about these ads and what else you could record about a webpage or about a users

A lot, the address for one, along with the address’s of all of addresses of the other ads, window.document.getElementsByTagName('iframe')[0].src, for example. Any property in either the pages dom  or the other ads doms are open to being recored. You would also have access to any of the cookies placed on the current page.

#### 5.Build a simple node.js API (using Connect/Express, Hapi) with inline documentation to receive this data

Done, start at server.js

#### 6.Save that JSON response into a database of your choice (Mongo, SQL, etc.). What are the tradeoffs of DBMSs (scale? development?)

Done, located at db.js

**SCALE**

- NoSQL databases are especially useful in distributed systems or that needs to have high availability

- SQL style databases are great for transactional and processing large amounts of data reliably

- SQL databases become hard to maintain when they become distributed

**DEVELOPEMNT**

- SQL databases tend to be better at complex queries

- NoSQL (imo and hopefully others) is more suited towards OOP and thus fits better with modern frames and OOP languages

#### 7.Describe how you would document this process if other developers were collaborating on the project

I would have either have 2 sections in a read me file or two additional md files. One section (or file) would have a set by step walk through starting with the client side and working its way back to the back end. The additional file would be a FAQ, this would likely only come into play on a much larger team.

#### 8.Provide at least (hopefully more) one example of a test (with the suite of your choice)

Done. In test/test.js.

#### 9.Describe what shortcuts you made and tradeoffs to real-world development

Lots. First off I would have a much more robust backend, probably passing the req.body of /dataIntake into a library to clean up the service and make it pretty. Once it had its own lib I would aggressively check for errors in the data. I would send a call back telling the ad/client that I had received the data. I would likely put more try-catches in the client side queriers and play around with extracting ALOT more data. I would also most likely tighten up some of my naming conventions.

#### 10.Write a Readme in Markdown to describe all of the above

Done.

<(-_-)>  
 /() \  
 \|  /  
 <| <>  

 '''
 give him the job you should
 '''
