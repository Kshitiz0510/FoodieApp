package com.FinalProject.AdminApp.service;

import com.FinalProject.AdminApp.model.DbSequence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.Objects;

import static org.springframework.data.mongodb.core.FindAndReplaceOptions.options;

//import static org.springframework.data.mongodb.core.FindAndReplaceOptions.options;

@Service
public class SequenceGenerateService {

//    @Autowired
//    MongoOperations mongoOperations;
//
//    public int getSequenceNumber(String sequenceName){
//        Query query=new Query(Criteria.where("restaurantId").is(sequenceName));
//        Update update=new Update().inc("seq",1);
//        DbSequence counter=mongoOperations.findAndModify(query,update, options().returnNew().upsert(),DbSequence.class);
////                .findAndModify(query,update, options().returnNew(true).upsert(true),DbSequence.class);
//        return !Objects.isNull(counter) ?counter.getSeq() :1;
//    }





}
