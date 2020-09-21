function getCount(res, strurl) {
          var ispromote = strurl.ispromote;
          var catename = strurl.catename;
          let sql = `SELECT * FROM goods where cat_name= ${catename}`;
    
          ispromote = parseInt(ispromote);
    
          if (ispromote === 0) {
            sql = sql + " AND is_promote = 0 ";
          } else if (ispromote === 1) {
            sql = sql + " AND is_promote = 1 ";
          }
    
    
          connection.query(sql,function (error, results) {
            if (error) throw error;
            res.end(JSON.stringify(results));
          });
    }