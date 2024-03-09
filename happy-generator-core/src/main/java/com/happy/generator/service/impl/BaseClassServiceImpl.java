package com.happy.generator.service.impl;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.happy.generator.common.page.PageResult;
import com.happy.generator.common.query.Query;
import com.happy.generator.common.service.impl.BaseServiceImpl;
import com.happy.generator.dao.BaseClassDao;
import com.happy.generator.entity.BaseClassEntity;
import com.happy.generator.service.BaseClassService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * 基类管理
 *
 * @author skycoder
 * 
 */
@Service
public class BaseClassServiceImpl extends BaseServiceImpl<BaseClassDao, BaseClassEntity> implements BaseClassService {

    @Override
    public PageResult<BaseClassEntity> page(Query query) {
        IPage<BaseClassEntity> page = baseMapper.selectPage(
                getPage(query), getWrapper(query)
        );

        return new PageResult<>(page.getRecords(), page.getTotal());
    }

    @Override
    public List<BaseClassEntity> getList() {
        return baseMapper.selectList(null);
    }

    @Override
    public boolean save(BaseClassEntity entity) {
        entity.setCreateTime(new Date());
        return super.save(entity);
    }
}