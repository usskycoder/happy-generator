package com.happy.generator.service;

import com.happy.generator.common.page.PageResult;
import com.happy.generator.common.query.Query;
import com.happy.generator.common.service.BaseService;
import com.happy.generator.entity.BaseClassEntity;

import java.util.List;

/**
 * 基类管理
 *
 * @author skycoder
 * 
 */
public interface BaseClassService extends BaseService<BaseClassEntity> {

    PageResult<BaseClassEntity> page(Query query);

    List<BaseClassEntity> getList();
}