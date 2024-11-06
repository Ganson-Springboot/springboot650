package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.MeishidingdanEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.MeishidingdanVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.MeishidingdanView;


/**
 * 美食订单
 *
 * @author 
 * @email 
 * @date 2022-05-15 17:11:37
 */
public interface MeishidingdanService extends IService<MeishidingdanEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<MeishidingdanVO> selectListVO(Wrapper<MeishidingdanEntity> wrapper);
   	
   	MeishidingdanVO selectVO(@Param("ew") Wrapper<MeishidingdanEntity> wrapper);
   	
   	List<MeishidingdanView> selectListView(Wrapper<MeishidingdanEntity> wrapper);
   	
   	MeishidingdanView selectView(@Param("ew") Wrapper<MeishidingdanEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<MeishidingdanEntity> wrapper);
   	

    List<Map<String, Object>> selectValue(Map<String, Object> params,Wrapper<MeishidingdanEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(Map<String, Object> params,Wrapper<MeishidingdanEntity> wrapper);

    List<Map<String, Object>> selectGroup(Map<String, Object> params,Wrapper<MeishidingdanEntity> wrapper);
}

